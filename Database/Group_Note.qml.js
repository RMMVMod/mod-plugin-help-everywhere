var ModAPI = require('modapi')
var _ = require('lodash')
var qml = ModAPI.QMLFile("Database/Group_Note.qml")

var textArea = qml.getObjectById("item")

var container = textArea.parent.newObject().createNode()
container.describe = "Item"
container.object("width", "item.itemWidth")
container.object("height", "item.itemHeight")

textArea.parent = container

var pheButton = container.newObject().createNode()
pheButton.describe = "PluginHelpEverywhereButton"
pheButton.object("anchors.bottom", "item.top")
pheButton.object("anchors.right", "item.right")

qml.save()
