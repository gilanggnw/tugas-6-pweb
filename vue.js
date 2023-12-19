new Vue({
    el: '#app',
    data: {
        expression: '',
        buttons: ['1', '2', '3', '+', '4', '5', '6', '-', '7', '8', '9', '*', '0', '/', 'C', '=']
    },
    methods: {
        handleButtonClick(button) {
            if (button === 'C') {
                this.expression = '';
            } else if (button === '=') {
                try {
                    this.expression = this.evaluateExpression(this.expression);
                } catch (error) {
                    this.expression = 'Error';
                }
            } else {
                this.expression += button;
            }
        },
        evaluateExpression(expression) {
            let fn = new Function('return ' + expression);
            return fn();
        },
        isOperator(button) {
            return ['+', '-', '*', '/'].includes(button);
        }
    }
});