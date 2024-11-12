# -*- coding: utf-8 -*-
from odoo import http
from odoo.http import request
from odoo.http import Response
from datetime import datetime
import json
import yfinance as yf
import pandas as pd

class BTCPriceControllers(http.Controller):

    @http.route('/getprice', auth='none', methods=['GET'], csrf=False)
    def _get_btc_price(self, **kw):
        btc_data = yf.download("BTC-USD", period="5d", interval="1d")
        print(btc_data)
        btc_close = btc_data['Close']
        
        return btc_close.to_json()