import QtQuick 2.3
import QtQuick.Controls 1.2
import "../BasicControls"
import "../BasicLayouts"
import "../ObjControls"
import "../Singletons"
import "../Main"

Button {
    id: button
    text: "PHE™"
    width: 50
    action: pluginHelpAction

    Dialog_PluginHelpEverywhere {
        id: pluginHelpDialog
    }

    Action {
        id: pluginHelpAction
        shortcut: "F1"
        onTriggered: pluginHelpDialog.open()
    }
}
