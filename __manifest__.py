{
    'name': 'PoS Purchase Limit',
    'version': '16.0.1.0.0',

    'depends': ['base', 'sale', 'point_of_sale'],
    'data': [
        'views/res_partner_view.xml',
    ],
    'assets': {
        'point_of_sale.assets': [
            'pos_purchase_limit/static/src/js/purchase_limit.js',
        ],
    },
}
