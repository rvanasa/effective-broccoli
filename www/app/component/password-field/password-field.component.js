module.exports = {
	template: require('./password-field.html'),
	bindings: {
		ref: '=',
	},
	controller()
	{
		'ngInject'
		var $ctrl = this;
		
		$ctrl.validators = [{
			name: '7 characters',
			test: (input) => input.length > 7,
		}, {
			name: 'Lowercase letter',
			test: /[a-z]/,
		}, {
			name: 'Capital letter',
			test: /[A-Z]/,
		}, {
			name: 'Number',
			test: /[0-9]/,
		}, {
			name: 'Symbol',
			test: /[^A-Za-z0-9]/,
		}, {
			name: 'Confirmed',
			test(input, valid)
			{
				$ctrl.showConfirm = valid;
				return input === $ctrl.confirm;
			},
		}];
		
		// Validation logic; updates on input field change
		$ctrl.validate = function()
		{
			var input = $ctrl.input;
			var valid = !!input;
			for(var validator of $ctrl.validators)
			{
				var state;
				if(typeof validator.test === 'function')
				{
					state = validator.test(input, valid);
				}
				else
				{
					state = input !== input.replace(validator.test, '');
				}
				
				validator.state = state;
				if(!state)
				{
					valid = false;
				}
			}
			
			$ctrl.ref = valid ? input : null;
		}
	}
}