# Copyright (c) 2022, MIT and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document

class BudgetEstimationCalculator(Document):
	@frappe.whitelist()
	def amt_calc(self):
		if self.table_1:
			for i in self.table_1:
				print('55555555555555555',i.qty,i.rate)
				return i.qty * i.rate
