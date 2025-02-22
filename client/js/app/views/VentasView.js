class VentasView extends View{


    constructor(elemento) {
        super(elemento);
    }


    template(model) {
        console.log(model);
        return `
        <table class="table table-hover table-bordered">
        <thead>
            <tr>
                <th>Fecha</th>
                <th>Cantidad</th>
                <th>Valor</th>
                <th>Total</th>
            </tr>
        </thead>

        <tbody>

        ${model.listaVentas.map(n => `
                <tr>
                <td>${FechaHelper.fechaParaTexto(n.fecha)}</td>
                <td>${n.cantidad}</td>
                <td>${n.valor}</td>
                <td>${n.totalVenta}</td>
            </tr>
            `).join('')

            }

        </tbody>
            <tfoot>
            <tr>
                <td colspan="3"></td>
                <td>${model.listaVentas.reduce((total, n) => total + n.totalVenta, 0.0)
            }
                </td>
                <td></td>
                <td></td>
            </tr>
            </tfoot>
       
    </table>
        `;
    }

}


// class VentasView extends View{
//     #render;
//     constructor(render) {
//         this.#render = render;
//     }



//     template(model) {
//         console.log(model);
//         return `
//         <table class="table table-hover table-bordered">
//         <thead>
//             <tr>
//                 <th>Fecha</th>
//                 <th>Cantidad</th>
//                 <th>Valor</th>
//                 <th>Total</th>
//             </tr>
//         </thead>

//         <tbody>

//         ${model.listaVentas.map(n => `
//                 <tr>
//                 <td>${FechaHelper.fechaParaTexto(n.fecha)}</td>
//                 <td>${n.cantidad}</td>
//                 <td>${n.valor}</td>
//                 <td>${n.totalVenta}</td>
//             </tr>
//             `).join('')

//             }

//         </tbody>
//             <tfoot>
//             <tr>
//                 <td colspan="3"></td>
//                 <td>${model.listaVentas.reduce((total, n) => total + n.totalVenta, 0.0)
//             }
//                 </td>
//                 <td></td>
//                 <td></td>
//             </tr>
//             </tfoot>
       
//     </table>
//         `;
//     }

//     update(model) {
//         if (!this.#render) {
//             console.error("Error: El elemento render no existe.");
//             return;
//         }
//         this.#render.innerHTML = this.template(model);
//     }
// }