Ext.define('extJS_Test_Task.view.home.GoodsView.GoodsTabViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.goodstabviewcontroller',

    onEditCancelled: function (editor, value, startValue, eOpts) {
        var user = Ext._find(value.record.store.config.data.items, { name: value.record.data.name });
        Ext.Msg.confirm('Confirm', value.record.data.name + ': ' + user.phone + ' is phone number', 'onConfirm', this);
    }
});
