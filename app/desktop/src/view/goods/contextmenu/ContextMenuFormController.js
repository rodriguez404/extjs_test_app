Ext.define('MyApp.controller.ContextMenuFormController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.contextmenuformcontroller',

    onSaveTap: function() {
        var view = this.getView();
        var record = view.record;

        if (!record) return;

        record.set({
            cost: view.lookupReference('cost').getValue(),
            amount: view.lookupReference('amount').getValue()
        });

        view.close();
    },

    onCloseTap: function() {
        var view = this.getView();

        view.close();
    }
});