/** @odoo-module **/

import publicWidget from "@web/legacy/js/public/public_widget";
import { loadBundle } from "@web/core/assets";

const BTCUSDWidget = publicWidget.Widget.extend({
    selector: '.s_btcusd',
    disabledInEditableMode: false,

    /**
     * @override
     */
    start: function () {
        console.log("Hello World snippet loaded!");
        this._fetchIPAddress();
        return this._super.apply(this, arguments);
    },

    _fetchIPAddress() {
        fetch('/getprice')
        .then(response => response.json())
        .then(data => {
            let prices = []
            let dates = []
            for (const [timestamp, price] of Object.entries(data["BTC-USD"])) {
                const date = new Date(parseInt(timestamp));
                prices.push(price);
                dates.push(date.toLocaleDateString());
            }
            const chartEl = this.$target.find('canvas')[0];
            const chartContext = chartEl.getContext('2d');
            new Chart(chartContext, {
                type: 'line',
                data: {
                labels: dates,
                datasets: [{
                    label: 'Price in USD',
                    data: prices,
                    borderWidth: 1
                }]
                },
                options: {
                scales: {
                    y: {
                    beginAtZero: false
                    }
                }
                }
            });
        })
        .catch(error => console.error("Error fetching data:", error));
        
    },

    willStart: async function () {
        await loadBundle("web.chartjs_lib");
    },
});

publicWidget.registry.btcusd_data = BTCUSDWidget;

export default BTCUSDWidget;