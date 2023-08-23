import './App.css';

export default function Table(){
    return(
        <div>
            <table >
                <tbody>
                <tr className='table align-center'>
                    <td>Now</td>
                    <td>11:00</td>
                    <td>12:00</td>
                    <td>13:00</td>
                    <td>14:00</td>
                    <td>15:00</td>
                    <td>16:00</td>
                    <td>17:00</td>
                </tr>
                <tr>
                    <td className="bi bi-sun"></td>
                    <td className="bi bi-sun"></td>
                    <td  className="bi bi-cloudy"></td>
                    <td  className="bi bi-cloudy"></td>
                    <td className="bi bi-sun"></td>
                    <td  className="bi bi-cloudy"></td>
                    <td  className="bi bi-cloudy"></td>
                    <td className="bi bi-sun"></td>
                </tr>
                <tr>
                    <td>27</td>
                    <td>28</td>
                    <td>28</td>
                    <td>29</td>
                    <td>30</td>
                    <td>29</td>
                    <td>29</td>
                    <td>28</td>
                </tr>
                <tr>
                    <td><div></div></td>
                    <td><div></div></td>
                    <td><div></div></td>
                    <td><div></div></td>
                    <td><div></div></td>
                    <td><div></div></td>
                    <td><div></div></td>
                    <td><div></div></td>
                </tr>
                <tr>
                    <td>23%</td>
                    <td>29%</td>
                    <td>58%</td>
                    <td>75%</td>
                    <td>33%</td>
                    <td>20%</td>
                    <td>73%</td>
                    <td>49%</td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}