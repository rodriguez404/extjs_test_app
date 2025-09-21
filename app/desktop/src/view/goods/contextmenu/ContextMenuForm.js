Ext.define('MyApp.view.ContextMenuForm', {
    extend: 'Ext.form.Panel',
    xtype: 'contextmenuform',

    controller: 'contextmenuformcontroller',
    modal: true, // Затемняет всё остальное меню и не дает взаимодействовать с ним
    centered: true,
    width: 450,
    height: 300,
    padding: 16,
    title: 'Карточка товара:',
    closable: true,
    layout: 'vbox',

    items: [
        {
            xtype: 'displayfield',
            label: 'ID',
            labelAlign: 'left',
            reference: 'id',
        },
        {
            xtype: 'displayfield',
            label: 'Имя',
            labelAlign: 'left',
            reference: 'name',
        },
        {
            xtype: 'displayfield',
            label: 'Описание',
            labelAlign: 'left',
            reference: 'description',
        },
        {
            xtype: 'numberfield',
            label: 'Стоимость',
            labelAlign: 'left',
            reference: 'cost',
        },
        {
            xtype: 'numberfield',
            label: 'Количество',
            labelAlign: 'left',
            reference: 'amount',
        },
        {
            xtype: 'button',
            text: 'Сохранить',
            ui: 'action',
            handler: 'onSaveTap'
        }
    ],

    hideOnMaskTap: true,

});