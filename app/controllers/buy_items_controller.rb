class BuyItemsController < ApplicationController
    def index
        @buy_items = BuyItem.all
    end

    def new
        @buy_item = BuyItem.new
    end

    def create
        buy_item = params.require(:buy_item).permit(:category_id, :name, :price)
        BuyItem.create(buy_item)
        redirect_to buy_items_path
    end

end
