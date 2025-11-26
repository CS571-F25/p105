import React, { useEffect, useMemo, useContext, useState } from "react";
import { Container, Col, Form, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import StoreCard from "./componentsPage/cartComponent";
import { AuthContext } from "../structural/CalorieCartApp";
export default function StorePage({
  items,
  qty,
  add,
  subtract,
  handleQtyChange,
}) {


  const CHEAP = 2; 
  const PROTEIN = 15;
  const LOWCAL = 150;

  const [filters, setFilters] = useState({
    cheap: false,
    highProtein: false,
    lowCalories: false,
    discounts: false,
  });
  
  const [search, setSearch] = useState("");


  const [showing,setShowing] = useState(false);
  const { user, setUser } = useContext(AuthContext);
  const slug = (s = "") =>
    s.toLowerCase().replaceAll("/", "-").replaceAll(" ", "-");

  const { type: typeSlug } = useParams();


  const filterSelect = (item) => {
    const nutr = item.nutrition;
    const price = item.price;
    const protein = nutr.protein_g;
    const calories = nutr.calories_kcal;

    if(filters.cheap && !(price<CHEAP)){
      return false;
    }

  
    if(filters.highProtein && !(protein>PROTEIN)){
      return false;
    }

    if(filters.lowCalories && !(calories<LOWCAL)){
      return false;
    }
    if (filters.discounts && !item.discount) {
      return false;
    }
   
    return true;
  }

  const filterOnSearch = (item) =>{
    const trimmed = search.trim();
    if(!trimmed)  return true;

    const itemOfSearch = trimmed.toLowerCase();
    const collection = `${item.description ?? ""}`.toLowerCase();
    return collection.includes(itemOfSearch);
  }


  const effectiveType = useMemo(() => {
    if (!typeSlug || !items.length) return null;
    const match = items.find((it) => slug(it.type) === typeSlug);
    return match?.type ?? null;
  }, [items, typeSlug]);

  const title = useMemo(() => {
    if (!effectiveType) return "Store";
    const raw = effectiveType;
    return raw.charAt(0).toUpperCase() + raw.slice(1).toLowerCase();
  }, [effectiveType]);

  const filteredItems = useMemo(() => {
    if (!effectiveType) return [];
    const want = slug(effectiveType);
    return items.filter((it) => slug(it.type) === want)
          .filter((it)=> filterSelect(it))
          .filter((it)=>filterOnSearch(it));

  }, [items, effectiveType, filters,search]);

  const green = "#73b23a";



  return (
    <div style={{ margin: "0 auto", padding: 16 }}>
      <Container fluid>
        <h1 style={{ marginTop: 20, marginBottom: 20 }}>{title}</h1>
        <Row style={{ marginTop: 20 }}>
          <Col
            md={3}
            style={{
              borderRadius: 6,
              padding: 16,
              minHeight: "20%",
              alignItems: "center",  
            }}
          >
            <h2 style={{ marginBottom: 12 }}>Filters</h2>
            <Form style={{alignSelf:"center",  maxWidth: 220}}>
              <Form.Check type="checkbox" label="cheap"  onChange={(e) =>
                  setFilters((f) => ({ ...f, cheap: e.target.checked }))
                }/>
              <Form.Check type="checkbox" label="high protein" onChange={(e) =>
                  setFilters((f) => ({ ...f, highProtein: e.target.checked }))
                }/>
              <Form.Check type="checkbox" label="low calories"onChange={(e) =>
                  setFilters((f) => ({ ...f, lowCalories: e.target.checked }))
                } />
              <Form.Check type="checkbox" label="Discounts" onChange={(e) =>
                  setFilters((f) => ({ ...f, discounts: e.target.checked }))
                }/>
            </Form>
          </Col>

          <Col md={9}>
            <div
              style={{
                borderRadius: 6,
                padding: 10,
                marginBottom: 24,
              }}
            >
              <Form>
                <Form.Control placeholder="search" onChange={(e) => setSearch(e.target.value)}/>
              </Form>
            </div>

            <div
              style={{
                borderRadius: 6,
                padding: 16,
                minHeight: 420,
              }}
            >
              <Row lg={4} sm={12} md={6}>
              {filteredItems.map((item) => {
                  const id = item.id;
                  const thisQty = qty?.[id] ?? 0;

                  return (
                    <Col
                    key={id}
                    xs={12}    
                    sm={8}     
                    md={6}     
                    lg={4}>
                    <StoreCard
                      item={item}
                      cardStyle={{ width: "100%" }}
                      qty={thisQty}
                      add={() => add(id)}
                      subtract={() => subtract(id)}
                      handleQtyChange={(e) => handleQtyChange(id, e)}
                    />
                    </Col>
                  );
                })}
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
