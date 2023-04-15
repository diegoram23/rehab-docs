import { useState } from "react";
import calculatorNumbers from "./calculatorNumbers";

const BillingCalculator = () => {
    const [calculatorNums, setCalculatorNums] = useState(calculatorNumbers)

    return (
        <div className="calculator-container">
            {calculatorNums.map(num => (
                <div className="num-box" key={num.id}>
                    <label>
                        <span className="num-title">{num.value}: Minutes <input
                        type='number'
                        placeholder="0"
                        />
                        </span>
                        <textarea
                            required
                            type='text'
                        >
                        </textarea>
                    </label>
                </div>
            ))}
        </div>
    );
}

export default BillingCalculator;


{/* <label className="minutes-label">
<span>Billable minutes</span>
<input
    required
    type='number'
    placeholder="0"
/>
</label> */}