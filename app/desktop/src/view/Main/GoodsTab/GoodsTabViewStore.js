Ext.define('extJS_Test_Task.view.home.GoodsViewStore', {
    extend: 'Ext.data.Store',
    alias: 'store.goodstabviewstore',
    fields: [
        { name: 'id',           type: 'number' },
        { name: 'name',         type: 'string' },
        { name: 'description',  type: 'string' },
        { name: 'cost',         type: 'number' },
        { name: 'amount',       type: 'number' },
    ],
	proxy: {
		type: 'ajax',
        reader: {
            type: 'json',
            rootProperty: 'items'
        },
		url: 'resources/goods.json'
	},
	autoLoad: true

});
