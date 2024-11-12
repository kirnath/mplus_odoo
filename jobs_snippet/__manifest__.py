# -*- coding: utf-8 -*-
{
    'name': "random jobs snippet",

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
        'views/snippets/s_jobs_custom.xml',
        'views/snippets/options.xml',
    ],
    'assets': {
        'web.assets_frontend': [
            'jobs_snippet/static/src/snippets/s_jobs_custom/000.js',
            'jobs_snippet/static/src/snippets/s_jobs_custom/000.scss',
        ],
    },
    'images': ['static/src/img/s_jobs_custom_thumbnail.png'],
    'installable': True,
    'application': False,
}
