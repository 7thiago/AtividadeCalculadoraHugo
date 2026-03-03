# AtividadeCalculadoraHugo
Atividade realizada em sala - entregue dia 03-03-26

Realizado um aplicativo de calculadora utilizando React Native - Expo
Como se trata de uma calculadora, ele tem suas caracteristicas 

1. Inserção de Números
2. Operações básicas de Matemática (+,-,*,/)
3. Calculo da raiz quadrada (√)
4. Limpeza da tela (C)
5. Exibição do resultado (=)

Construi a interface utilizando 
SafeAreaView, View, Text, TouchableOpacity 
Fiz um controle com o hook useState para armazenar "display", "first", "op"
Sendo executado a partir do momento que pressiono o botão de (=)

Requisitos Funcionais:
1. Inserção dos números:
Fiz com que pudesse escolher o número de 0 a 9
2. Exibição no display:
Feito com que fosse exibido no visor os números digitados e os resultados da mesma 
3. Operações básicas
Ele está permitindo as operações básicas da mátematica (Adição, Subtração, Multiplicação e Divisão)
4. Calculo do Resultado
Ele só ocorre quando o botão (=) for pressionado

Requisitos não funcionais:
1. Usabilidade:
Por mais que tenha algumas informações incorretas (fora de posição), está intuitivo e simples
2. Desempenho
O calculo ocorre após apertar o (=)
3. Compatibilidade: 
Usando o expo, ele faz com que funcione tanto iOS quanto Android
4. Responsividade
Foi feito com que seja possível os botões serem ajustado conforme o tamanho da tela (por conta do flex)
