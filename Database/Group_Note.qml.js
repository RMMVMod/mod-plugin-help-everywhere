var ModAPI = require('modapi')
var _ = require('lodash')
var qml = ModAPI.QMLFile("Database/Group_Note.qml")

var textArea = qml.root.getObjectById("item")
var container = ModAPI.QMLCompile("Item { width: item.itemWidth; height: item.itemHeight; PluginHelpEverywhereButton {anchors.bottom:item.top; anchors.right:item.right }}")
var x = textArea.parent
container.add(textArea)
x.add(container)

qml.save()
