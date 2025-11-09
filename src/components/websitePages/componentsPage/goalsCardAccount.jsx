import { Card, Button, ProgressBar, ToggleButton, ToggleButtonGroup } from "react-bootstrap";

export default function goalsCardAccount() {

    return(
        <Card
        style={{
          width: 700,
          height: 400,
          borderRadius: 20,
          display: "flex",
        }}
        id="Account Goals"
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
          <Card.Title style={{alignItems:"center"}} >Goals</Card.Title>
         

          <Button size="sm" variant="light" style={{ color: "#2b7a4b",borderRadius:10 }}>
            Edit
          </Button>
         
        </Card.Header>

        <Card.Body style={{ padding: 20 }}>
          <div style={{marginTop:10}}>
            <h5>Calories Consumed</h5>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <span style={{ fontSize: 14, fontWeight: 500 }}>0g</span>

            <div style={{ flex: 1, margin: "8px" }}>
                <ProgressBar
                  style={{
                    "--bs-progress-bar-bg": "#35b000",
                    fontWeight: 600,
                  }}
                  now={90}
                  label="Calories"
                />
                </div>
                <span style={{ fontSize: 14, fontWeight: 500 }}>3600</span>

                </div>

          </div>

          <div style={{marginTop:20}}>
          <h5 >Fat Consumed</h5>
          <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <span style={{ fontSize: 14, fontWeight: 500 }}>0g</span>
              <div style={{ flex: 1, margin: " 8px" }}>

                <ProgressBar
                  style={{
                    "--bs-progress-bar-bg": "#f54f2a",
                    fontWeight: 600,
                  }}
                  now={70}
                  label="Protein"
                />
                </div>
              <span style={{ fontSize: 14, fontWeight: 500 }}>300g</span>

             </div>

          </div>

          <div style={{marginTop:20}}>
            <h5>Fat Consumed</h5>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <span style={{ fontSize: 14, fontWeight: 500 }}>0g</span>

              <div style={{ flex: 1, margin: " 8px" }}>
                <ProgressBar
                  now={70}
                  label="fat%"
                  style={{
                    "--bs-progress-bar-bg": "#e3aa0e",
                    height: "18px",
                    fontWeight: 600,
                    borderRadius: "8px",
                  }}
                />
              </div>

              <span style={{ fontSize: 14, fontWeight: 500 }}>200g</span>
            </div>
          </div>
          <ToggleButtonGroup
          type="checkbox"
          name="options"
          defaultValue={1}
        >
          <ToggleButton id="tbg-radio-1" value={1}>
            Gain Weight
          </ToggleButton>
          <ToggleButton id="tbg-radio-1" value={2}>
            Lose Weight
          </ToggleButton>
        </ToggleButtonGroup>
        </Card.Body>
      </Card>
    );
}