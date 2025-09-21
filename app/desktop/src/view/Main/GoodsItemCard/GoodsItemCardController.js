Ext.define('MyApp.controller.ContextMenuFormController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.contextmenuformcontroller',

    onSaveTap: function() {
        var view = this.getView();
        var record = view.record;

        if (!record) return;

        costField = view.lookupReference('cost')
        amountField = view.lookupReference('amount')

        if (!costField.isValid() || !amountField.isValid()) {
            Ext.Msg.alert('Ошибка', 'Неверные данные для сохранения');
            return;
        }

        record.set({
            cost: costField.getValue(),
            amount: amountField.getValue()
        });

        // Проверка на изменение данных
        var costModified = record.isModified('cost'),
            amountModified = record.isModified('amount');

        if (costModified || amountModified) {
            // Были изменения — показываем сообщение
            Ext.Msg.alert('Успешно', 'Данные были успешно изменены.');
        }

        view.close();

    },

    onCloseTap: function() {
        var view = this.getView();

        view.close();
    }
});