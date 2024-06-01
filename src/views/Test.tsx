import { useState } from 'react';

function Test() {
    // export default function Contador() {
        const [contador, actualizarContador] = useState(0);
        const sumarUno = () => actualizarContador(contador + 5);
        return (<>
            <button onClick={sumarUno}>Sumar 1</button>
            <h3>{contador}</h3>
        </>);
// }
}

export default Test;