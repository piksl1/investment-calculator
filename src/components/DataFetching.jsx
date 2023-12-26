const DataFetching = ({ userInput, onChange }) => {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>initial investment</label>
          <input
            type="number"
            value={userInput.initialInvestment}
            onChange={(e) => {
              onChange("initialInvestment", e.target.value);
            }}
            required
          />
        </p>
        <p>
          <label>annual investment</label>
          <input
            type="number"
            value={userInput.annualInvestment}
            onChange={(e) => {
              onChange("annualInvestment", e.target.value);
            }}
            required
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>expected return</label>
          <input
            type="number"
            value={userInput.expectedReturn}
            onChange={(e) => {
              onChange("expectedReturn", e.target.value);
            }}
            required
          />
        </p>
        <p>
          <label>duration</label>
          <input
            type="number"
            value={userInput.duration}
            onChange={(e) => {
              onChange("duration", e.target.value);
            }}
            required
          />
        </p>
      </div>
    </section>
  );
};

export default DataFetching;
