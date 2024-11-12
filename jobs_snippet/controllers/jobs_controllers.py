# -*- coding: utf-8 -*-
from odoo import http
from odoo.http import request
from odoo.http import Response
from datetime import datetime
import json
import random


class RandomJobsControllers(http.Controller):

    @http.route('/getjobs', auth='none', methods=['GET'], csrf=False)
    def _get_random_jobs(self, **kw):
        jobs = request.env['hr.job'].sudo().search([], limit=100)
        all_jobs = list(jobs)
        random.shuffle(all_jobs)
        selected_jobs = all_jobs[:4]
        job_list = []
        for job in selected_jobs:
            job_list.append({
                'id': job.id,
                'name': job.name,
                'location': job.address_id.city,
                'active': job.active,
                'published': job.website_published,
                'slug': job.name.replace(" ", "-") + "-" + str(job.id),
            })
        job_fields = request.env['hr.job'].sudo().fields_get()
        return json.dumps(job_list)