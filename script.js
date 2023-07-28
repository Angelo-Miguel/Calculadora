function enviarnumero(valorbotao) {
			var currentValue = document.getElementById("visor").innerHTML;
			var updatedValue = currentValue + valorbotao;

			var maxLength = 12;
			if (updatedValue.length > maxLength) {
				updatedValue = updatedValue.substring(0, maxLength);
			}
			document.getElementById("visor").innerHTML = updatedValue;
		}

		function limpardigito() {
			currentValue = document.getElementById("visor").innerHTML;
			updatedValue = currentValue.slice(0, -1);
			document.getElementById("visor").innerHTML = updatedValue;
		}

		function limparvisor() {
			document.getElementById("visor").innerHTML = "";

			limparbotao();
		}

		function limparbotao(){
			var activeButton = document.querySelector('.operador.ativo');
			if (activeButton) {
				activeButton.classList.remove('ativo');
			}
		}

		function operador(testeop) {
			limparbotao();
			var clickedButton = document.querySelector('.operador[value="' + testeop + '"]');
			clickedButton.classList.add('ativo');

			number1 = document.getElementById("visor").innerHTML;
			operator1 = testeop;
			document.getElementById("visor").innerHTML = '';
		}


		function igual() {
			var number2 = parseFloat(document.getElementById("visor").innerHTML);
			var result = "";

			switch (operator1) {
				case '+':
					result = parseFloat(number1) + number2;
					break;
				case '-':
					result = parseFloat(number1) - number2;
					break;
				case '*':
					result = parseFloat(number1) * number2;
					break;
				case '/':
					result = parseFloat(number1) / number2;
					break;
				case '^':
					if (number2 == 1) {
						number2 = 2;
					}
					result = Math.pow(parseFloat(number1), number2);
					break;
				case '√':
					result = Math.sqrt(parseFloat(number2));
					break;
				default:
					result = '';
			}

			document.getElementById("visor").innerHTML = result.toString();.substring(0, maxLength);

			limparbotao();
		}
