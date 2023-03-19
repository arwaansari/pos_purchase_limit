odoo.define('pos_purchase_limit.POSValidateOverride', function(require) {
'use strict';
    const PaymentScreen = require('point_of_sale.PaymentScreen');
    const Registries = require('point_of_sale.Registries');
    const POSValidateOverride = PaymentScreen =>
        class extends PaymentScreen {
            async validateOrder(isForceValidate) {
            console.log(this.env.pos.orders[0].partner)
            if(this.env.pos.orders[0].partner == null){
            this.showPopup('ErrorPopup', {
                title: 'Customer not selected',
                body: "Select a customer.",
                });
            }
            else if(this.env.pos.orders[0].partner){
                if(this.env.pos.orders[0].partner.purchase_limit){
                    if(this.env.pos.orders[0].selected_paymentline.amount > this.env.pos.orders[0].partner.purchase_limit){
                    this.showPopup('ErrorPopup', {
                        title: 'Purchase Limit Exceeded',
                        body: "Your purchase limit is " + this.env.pos.orders[0].partner.purchase_limit + ". Total amount must be below purchase limit."
                    });
                    }
                    else{
                        await super.validateOrder(isForceValidate);
                    }
                }}
            }};
    Registries.Component.extend(PaymentScreen, POSValidateOverride);
    return PaymentScreen;
});