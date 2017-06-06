module.exports = {
	template: require('./demo.html'),
	controller()
	{
		'ngInject'
		var $ctrl = this;
		
		// Using `$ctrl` instead of `this` for readability
		
		$ctrl.usePassword = function()
		{
			alert('Received:  ' + $ctrl.password);
		}
	}
}