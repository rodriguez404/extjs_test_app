Ext.define('extJS_Test_Task.view.startup.LoginView',{
	xtype: 'loginview',
	cls: 'loginview',
	controller: {type: 'loginviewcontroller'},
	viewModel: {type: 'loginviewmodel'},
	requires: [],
	extend: 'Ext.Container',
	layout: 'center',
	scrollable: true,
	items: [
		{
			xtype: 'form-login'
		}
	]
});