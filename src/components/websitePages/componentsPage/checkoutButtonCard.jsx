import { Card, Button, Modal } from "react-bootstrap";
import { useMemo, useContext, useState } from "react";
import { AuthContext } from "../../structural/CalorieCartApp";
export default function CheckoutButtonCard({ items, qty }) {
  const { user, setUser } = useContext(AuthContext);
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  const listPurchase = (items || []).filter(
    (item) => (qty?.[item.id] || 0) > 0
  );

  const totalPrice = listPurchase.reduce((sum, item) => {
    const quantity = qty?.[item.id] || 0;
    const price = item?.price || 0;
    return sum + quantity * price;
  }, 0);

  const { addCalories, addProtein, addFat } = useMemo(() => {
    let calories = 0;
    let protein = 0;
    let fat = 0;

    for (const item of listPurchase) {
      const quantity = qty?.[item.id] || 0;
      const nutr = item?.nutrition || {};
      const cals = nutr.calories_kcal ?? 0;
      const prot = nutr.protein_g ?? 0;
      const fats = nutr.fat_g ?? 0;

      calories += cals * quantity;
      protein += prot * quantity;
      fat += fats * quantity;
    }
    return { addCalories: calories, addProtein: protein, addFat: fat };
  }, [listPurchase, qty]);
  console.log(user.accountId);
  const handleCheckout = () => {
    if (listPurchase.length === 0) {
      alert("Your cart is empty.");
      return;
    }

    const prev = user.weeklyProgress || {
      caloriesConsumed: 0,
      proteinConsumed: 0,
      fatConsumed: 0,
    };

    const updatedWeekly = {
      caloriesConsumed: prev.caloriesConsumed + addCalories,
      proteinConsumed: prev.proteinConsumed + addProtein,
      fatConsumed: prev.fatConsumed + addFat,
    };
    

    setIsCheckingOut(true);
    fetch(
      `https://cs571api.cs.wisc.edu/rest/f25/bucket/account?id=${user.accountId}`,
      {
        method: "PUT",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          "X-CS571-ID": CS571.getBadgerId(),
        },
        body: JSON.stringify({ weeklyProgress: updatedWeekly }),
      }
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (!data) return;
        setUser({
          ...user,
          weeklyProgress: updatedWeekly,
        });
        alert("Checkout complete! Your weekly progress has been updated.");
      });
  };

  return (
    <Card
      style={{
        marginTop: 30,
        borderRadius: 21,
        boxShadow: "0 6px 16px rgba(0,0,0,0.1)",
        fontFamily: "sans-serif",
      }}
      id="checkout"
    >
      <Card.Header
        style={{
          backgroundColor: "#59b371",
          color: "white",
          fontWeight: "bold",
          fontSize: 18,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px 16px",
        }}
      >
        <div> Checkout</div>
      </Card.Header>
      <Card.Body>
        <div style={{ maxHeight: 180, overflowY: "auto", marginBottom: 8 }}>
          {listPurchase.length === 0 ? (
            <div style={{ fontStyle: "italic", color: "#666", fontSize: 14 }}>
              Your cart is empty.
            </div>
          ) : (
            listPurchase.map((item) => {
              const quantity = qty?.[item.id] || 0;
              const itemTotal = (item?.price || 0) * quantity;
              return (
                <div
                  key={item.id}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: 4,
                    fontSize: 14,
                  }}
                >
                  <span>
                    {item.description} x {quantity}
                  </span>
                  <span>${itemTotal.toFixed(2)}</span>
                </div>
              );
            })
          )}
        </div>
        <hr />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontWeight: "bold",
            fontSize: 16,
            marginBottom: 12,
          }}
        >
          <span>Total</span>
          <span>${totalPrice.toFixed(2)}</span>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Button
            style={{ borderRadius: 15, width: "100%" }}
            onClick={handleCheckout}
            disabled={isCheckingOut || listPurchase.length === 0}
          >
            {" "}
            {isCheckingOut ? "Processing..." : "Proceed to Checkout"}
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}
