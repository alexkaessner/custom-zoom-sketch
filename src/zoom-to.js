import sketch from 'sketch'
// documentation: https://developer.sketchapp.com/reference/api/

export default function() {
	var zoomLevel = 1.0

	// ask user for input
	sketch.UI.getInputFromUser(
		"Zoom Level",
		{
			description: 'Set the zoom value in percent (without the % symbol).',
			type: 'string',
			initialValue: '100'
		},
		(err, value) => {
			if (err) {
				// most likely the user canceled the input
	      return
			} else {
				zoomLevel = value
			}
		}
	)

	// check if user input is a valid number
	if (zoomLevel == '' || zoomLevel < 1) {
		sketch.UI.message('Please choose a valid zoom level.')
	} else {
		context.document.setZoomValue(zoomLevel/100)
	}

}
