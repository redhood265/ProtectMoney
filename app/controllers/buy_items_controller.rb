class BuyItemsController < ApplicationController
  def index
    #今月/前月/前々月のデータ取得
    start_month = 2.months.ago.all_month.first
    end_month = Time.current.all_month.last
    @buy_items_ary = BuyItem.where(approval: true, created_at: start_month..end_month).to_a
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
