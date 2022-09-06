// Copyright (c) 2022, MIT and contributors
// For license information, please see license.txt

frappe.ui.form.on('Budget Estimation Calculator', {
	// refresh: function(frm) {

	// }
});

frappe.ui.form.on('Budget Estimation Calculator Table1', {
	rate: function(frm,cdt,cdn) {
		var child = locals[cdt][cdn]
		frappe.call({
			method:'amt_calc',
			doc:cur_frm.doc,
			callback: function(r){
				console.log("kkkkkk",r.message)
				child.amount = r.message
				// cur_frm.set_value(child.amount,r.message)
				cur_frm.refresh_field(child.amount)
			}

		})

	}
});