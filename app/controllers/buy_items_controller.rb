class BuyItemsController < ApplicationController

  THIS_MONTH = 'this_month'
  ONE_MONTH_AGO = 'one_month_ago'
  TWO_MONTH_AGO = 'two_month_ago'

  def index
    # React側での利用のみ
    @month_hash_key = [THIS_MONTH, ONE_MONTH_AGO, TWO_MONTH_AGO]

    #今月/前月/前々月のデータ取得
    month_hash_key_value = {this_month: Time.current.all_month, one_month_ago: 1.months.ago.all_month, two_month_ago: 2.months.ago.all_month}

    @buy_items_ary = {}
    month_hash_key_value.each_key { |key|
      @buy_items_ary[key] = BuyItem.by_month_buy(month_hash_key_value[key]).to_a
    }

    @total_amount_of_month_ary = BuyItem.total_amount_of_month
  end

  def new
    @buy_item = BuyItem.new
  end

  def create
      if BuyItem.buy_approval(params[:buy_item][:category_id]).blank?
          buy_item = params.require(:buy_item).permit(:category_id, :name, :price)
          BuyItem.create(buy_item)
      else
          flash[:error] = "該当カテゴリは、今月既に購入済みです。"
      end
      redirect_to buy_items_path
  end

  #ログ表示画面
  def log_view
    @buy_items = BuyItem.all
  end

  #チャート表示画面
  def chart_view
    @chart_data = BuyItem.total_amount_of_month.map {|item| [item.buy_month, item.month_price]}
  end

end

