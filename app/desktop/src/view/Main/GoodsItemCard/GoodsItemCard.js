Ext.define('MyApp.view.ContextMenuForm', {
    extend: 'Ext.form.Panel',
    xtype: 'contextmenuform',

    controller: 'contextmenuformcontroller',
    modal: true, // Затемняет всё остальное меню и не дает взаимодействовать с ним
    centered: true,
    width: 450,
    height: 300,
    padding: 16,
    title: 'Карточка товара',
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
            validators: [
                {
                    type: 'format',
                    matcher: /^\d+(?:\.\d+)?$/,
                    message: 'Должно быть неотрицательное число с плавающей точкой'
                }
            ]
        },
        {
            xtype: 'numberfield',
            label: 'Количество',
            labelAlign: 'left',
            reference: 'amount',
            validators: [
                {
                    type: 'format',
                    matcher: /^\d+$/,
                    message: 'Должно быть неотрицательное целое число'
                }
            ]
        },
        {
            xtype: 'container', // Обертка для кнопок в hbox вместо vbox
            layout: {
                type: 'hbox',
                pack: 'right',
            },
            defaults: {
                margin: '4 8 0 4' ,
                ui: 'action',
            },
            items: [
                {
                    xtype: 'button',
                    text: 'Сохранить',
                    handler: 'onSaveTap'
                },
                {
                    xtype: 'button',
                    text: 'Отмена',
                    handler: 'onCloseTap'
                }
            ]
        }
    ],

    hideOnMaskTap: true,

});