class BuyItemsController < ApplicationController
  def index
    #今月/前月/前々月のデータ取得
    @buy_items_hash = {}
    @buy_items_hash[:buy_items] = BuyItem.where(approval: true, created_at: Time.current.all_month)
    @buy_items_hash[:buy_items_1month_ago] = BuyItem.where(approval: true, created_at: 1.months.ago.all_month)
    @buy_items_hash[:buy_items_2month_ago] = BuyItem.where(approval: true, created_at: 2.months.ago.all_month)
  end

  def new
    @buy_item = BuyItem.new
  end

  def create
      if BuyItem.buy_approval(params[:buy_item][:category_id]).blank?
          buy_item = params.require(:buy_item).permit(:category_id, :name, :price)
          BuyItem.create(buy_item)
          redirect_to buy_items_path
      else
          flash[:error] = "該当カテゴリは、今月既に購入済みです。"
          redirect_to buy_items_path
      end
  end

  def log_cat
    @buy_items = BuyItem.all
    if params[:buy_item].blank?
      
    end
  end

end
