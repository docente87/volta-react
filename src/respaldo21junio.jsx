const random = () => {
    const vec = new Array(5);
    for (let i = 0; i < vec.length; i++) {
      vec[i] = Math.trunc(Math.random() * 10)      
      setNumeros(vec)
    }
  }
  
  const [numeros, setNumeros] = useState([0,1,0,0,0])


  <div>
        <p>Numero Aleatorio setState:
           {numeros.map(num => (<p>{num}</p>) )} </p>
        <button onClick={random} > Generar Aleotorio</button>
</div>