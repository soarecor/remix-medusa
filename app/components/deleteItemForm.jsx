import { Link } from "@remix-run/react";

function ExpenseForm() {
  const today = new Date().toISOString().slice(0, 10); // yields something like 2023-09-10

  return (
    <form method="post" className="form" id="expense-form">
      <p>Are you sure you want to delete this item from your cart?</p>

      <div className="form-actions">
        <button>Delete</button>
        <Link to="..">Cancel</Link>
      </div>
    </form>
  );
}

export default ExpenseForm;
