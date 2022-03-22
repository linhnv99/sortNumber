const alphas = "A B C D E F G H I J K L M N O P Q R S T U V W X Y Z"
// const alphas = "a b c d e f g h i j k l m n o p q r s t u v w x y z"
const alphaArr = alphas.split(' ')

const numbers = "9 8 7 6 5 4 3 2 1 0"
const numberArr = numbers.split(' ')

for (let i = 50, j = 0; i >= alphas.length, j <= alphaArr.length - 1; i--, j++) {
  console.log({
    label: alphaArr[j],
    value: i
  })
}