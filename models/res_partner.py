from odoo import models, fields


class CustomerInherit(models.Model):
    _inherit = "res.partner"

    activate_purchase_limit = fields.Boolean()
    purchase_limit = fields.Integer()

