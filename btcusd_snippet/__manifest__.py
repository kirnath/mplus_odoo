# -*- coding: utf-8 -*-
{
    'name': "btc usd price snippet",

    'summary': "Short (1 phrase/line) summary of the module's purpose",

    'description': """
Long description of module's purpose
    """,

    'author': "My Company",
    'website': "https://www.yourcompany.com",

    # Categories can be used to filter modules in modules listing
    # Check https://github.com/odoo/odoo/blob/15.0/odoo/addons/base/data/ir_module_category_data.xml
    # for the full list
    'category': 'Uncategorized',
    'version': '0.1',
    'depends': ['website', 'web_editor'],
    'data': [
        'views/snippets/s_btcusd_price.xml',
        'views/snippets/options.xml',
    ],
    'assets': {
        'web.assets_frontend': [
            'btcusd_snippet/static/src/snippets/s_btcusd_price/000.js',
            'btcusd_snippet/static/src/snippets/s_btcusd_price/000.scss',
        ],
    },
    'images': ['static/src/img/s_btcusd_price_thumbnail.png'],
    'installable': True,
    'application': False,
}
