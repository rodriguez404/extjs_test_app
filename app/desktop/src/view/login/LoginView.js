Ext.define('MyExtGenApp.view.startup.LoginView',{
	xtype: 'loginview',
	cls: 'loginview',
	controller: {type: 'loginviewcontroller'},
	viewModel: {type: 'loginviewmodel'},
	requires: [],
	extend: 'Ext.Container',
  scrollable: true,
  items: [
	{
		html: `<div style="user-select: text !important;">Welcome to the Ext JS Modern Desktop Template Application!`
	},
	{
		xtype: 'form-login'
	}
  ]
});