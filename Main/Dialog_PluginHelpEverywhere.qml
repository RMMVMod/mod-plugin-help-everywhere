import QtQuick 2.3
import QtQuick.Controls 1.2
import Tkool.rpg 1.0
import "../BasicControls"
import "../BasicLayouts"
import "../Controls"
import "../Singletons"
import "../Singletons/plugin-parser"
import "../Singletons/plugin-help-everywhere"

ModalWindow {
    id: root

    title: qsTr("Plugin Help Everywhere™")

    property string text

    DialogBox {
        okVisible: false
        cancelVisible: false
        applyVisible: false
        closeVisible: true

        DialogBoxColumn {
            DialogBoxRow {
                ListBox {
                    id: pluginList
                    width: 200
                    height: 360

                    headerVisible: false
                    multiSelect: false
                    showSelectionAlways: true
                    wantReturn: false

                    model: ListModel {
                        id: listModel
                    }

                    function refresh() {
                        var array = getDataArray();
                        listModel.clear();
                        for (var i = 0; i < array.length; i++) {
                            listModel.append(makeModelItem(array[i]));
                        }
                    }

                    ListBoxColumn {
                        role: "name"
                    }

                    function getDataArray() {
                        return DataManager.plugins;
                    }

                    function makeModelItem(data) {
                        var item = {};
                        if (data) {
                            item.name = data.name || "";
                            item.status = data.status ? qsTr("ON") : qsTr("OFF");
                            item.description = (data.description || "").replace(/\n/g, " ");
                        }
                        return item;
                    }

                    onCurrentIndexChanged: {
                        loadScript();
                    }

                    function loadScript() {
                        var name = model.get(currentIndex).name;
                        PluginHelpEverywhereManager.lastPluginName = name;
                        pluginHelp.text = PluginParser.parsePlugin(name).help || "";
                    }
                }

                TextArea {
                    id: pluginHelp
                    width: 560
                    height: 360
                    readOnly: true
                    selectAllOnFocus: false
                }
            }

            DialogAddon {
                Label {
                    text: "PHE™ by orzFly"
                }
            }
        }

        onInit: {
            pluginList.refresh();

            for (var i = 0; i < pluginList.rowCount; i++) {
                if (PluginHelpEverywhereManager.lastPluginName == listModel.get(i).name) {
                    pluginList.currentIndex = i;
                }
            }
        }
    }
}
