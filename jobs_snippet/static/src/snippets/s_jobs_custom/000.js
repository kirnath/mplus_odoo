/** @odoo-module **/

import publicWidget from "@web/legacy/js/public/public_widget";
import { loadBundle } from "@web/core/assets";

const RandomJobs = publicWidget.Widget.extend({
    selector: '.s_jobs_custom',
    disabledInEditableMode: false,

    /**
     * @override
     */
    start: function () {
        console.log("Random Jobs snippet loaded!");
        this._fetchRandomJobs();
        return this._super.apply(this, arguments);
    },

    _fetchRandomJobs() {
        fetch('/getjobs')
        .then(response => response.json())
        .then(data => {
            // console.log(data);
            const jobsContainer = this.el.querySelector('#jobs_grid_custom .row');
            jobsContainer.innerHTML = '';
            data.forEach(job => {
                const jobElement = document.createElement('div');
                jobElement.classList.add('col-lg', 'mb32');
                jobElement.innerHTML = `
                    <div class="card o_jobs_unpublished">
                        <a draggable="false" id="job_slug" href="/jobs/${job.slug}"
                            class="text-decoration-none text-reset">
                            <div class="card-body p-4">
                                <div class="mt0 d-flex justify-content-between align-items-center">
                                    <h3 id="job_name">${job.name}</h3>
                                    <span class="badge text-bg-${job.published ? 'success' : 'danger'} mb8" id="published">
                                        ${job.published ? 'published' : 'unpublished'}
                                    </span>
                                </div>
                                <h5 class="text-reset">
                                    <span>1</span>
                                    open position${job.active ? '' : 's'}</h5>
                                <div class="oe_empty text-muted mb16"></div>
                                <div class="o_job_infos d-flex flex-column">
                                    <span class="fw-light">
                                        <address class="mb-0">
                                            <div>
                                                <div class="d-flex align-items-baseline">
                                                    <i class="fa fa-map-marker fa-fw" role="img" aria-label="Address"
                                                        title="Address"></i>
                                                    <span class="w-100 o_force_ltr d-block" id="location">
                                                        ${job.location ? job.location : 'Remote'}</span>
                                                </div>
                                            </div>
                                        </address>
                                    </span>
                                </div>
                            </div>
                        </a>
                    </div>
                `;
                jobsContainer.appendChild(jobElement);
            });
        })
        .catch(error => console.error("Error fetching data:", error));
    },

    willStart: async function () {
        await loadBundle("web.chartjs_lib");
    },
});

publicWidget.registry.btcusd_data = RandomJobs;

export default RandomJobs;
