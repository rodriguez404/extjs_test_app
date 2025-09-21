Ext.define('extJS_Test_Task.view.home.GoodsView.GoodsTabViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.goodstabviewcontroller',

    onEditCancelled: function (editor, value, startValue, eOpts) {
        var user = Ext._find(value.record.store.config.data.items, { name: value.record.data.name });
        Ext.Msg.confirm('Confirm', value.record.data.name + ': ' + user.phone + ' is phone number', 'onConfirm', this);
    },

    onSearchDescFieldEnter: function(field, e) {
        if (e.getKey() === e.ENTER) {
            this.doSearchDesc(field);
        }
    },

    onSearchIdFieldEnter: function(field, e) {
        if (e.getKey() === e.ENTER) {
            this.doSearchId(field);
        }
    },

    doSearchId: function (field) {
        var grid = field.up('tabpanel').down('grid')
        var store = grid.getStore()
        var value = field.getValue()
        var filterId = 'searchByIdFilter'

        if (!value) {
            // Удалить фильтр, если поле поиска пустое
            store.removeFilter(filterId);
        } else {
            store.addFilter({
                id: filterId,
                property: 'id',
                value: value,
                exactMatch: true,
                caseSensitive: false
            });
        }
    },

    doSearchDesc: function (field) {
        var grid = field.up('tabpanel').down('grid')
        var store = grid.getStore()
        var value = field.getValue()
        var filterId = 'searchByDescFilter'

        if (!value) {
            // Удалить фильтр, если поле поиска пустое
            store.removeFilter(filterId);
        } else {
            store.addFilter({
                id: filterId,
                property: 'description',
                value: value,
                // exactMatch: false,
                anyMatch: true,
                caseSensitive: false
            });
        }
    },

    clickableCell: function(element) {
        var clickablecell = element.getTarget(".clickable-cell")
        if (clickablecell) {
            record = element.to.record
            if (record) {
                this.showContextMenu(record);
            }
        }
    },

    showContextMenu: function(record) {
    // Удалить старое меню, если есть
        if (this.contextForm) {
            this.contextForm.destroy();
        }

        this.contextForm = Ext.create({
            xtype: 'contextmenuform'
        });

        this.contextForm.record = record;

        var refs = this.contextForm.getReferences();
        console.log(refs)
        refs.id.setValue(record.get('id'));
        refs.name.setValue(record.get('name'));
        refs.description.setValue(record.get('description'));
        refs.cost.setValue(record.get('cost'));
        refs.amount.setValue(record.get('amount'));

        Ext.Viewport.add(this.contextForm);
        this.contextForm.show();
    }
});
