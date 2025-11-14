import React, { useEffect, useMemo, useState } from "react";
import { Container, Col, Form, Row } from "react-bootstrap";
import {  useParams } from "react-router-dom";
import StoreCard from "../websitePages/componentsPage/cartComponent"

export default function StorePage({ items, }) {
  const slug = (s = "") =>
    s.toLowerCase().replaceAll("/", "-").replaceAll(" ", "-");

  const { type: typeSlug } = useParams();

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
    return items.filter((it) => slug(it.type) === want);
  }, [items, effectiveType]);

  const green = "#73b23a";

  return (
    <div style={{ margin: "0 auto", padding: 16 }}>
      <Container fluid>
        <h1 style={{ marginTop: 20, marginBottom: 20 }}>{title}</h1>
        <Row style={{ marginTop: 20 }}>
          <Col md={3}
               style={{
                 border: `8px solid ${green}`,
                 borderRadius: 6,
                 padding: 16,
                 minHeight: 360
               }}>
            <h2 style={{ marginBottom: 12 }}>Filters</h2>
            <Form>
              <Form.Check type="checkbox" label="cheap" />
              <Form.Check type="checkbox" label="high protein" />
              <Form.Check type="checkbox" label="low calories" />
              <Form.Check type="checkbox" label="Discounts" />
            </Form>
          </Col>

          <Col md={9}>
            <div
              style={{
                border: `8px solid ${green}`,
                borderRadius: 6,
                padding: 10,
                marginBottom: 24
              }}
            >
              <Form>
                <Form.Control placeholder="search" />
              </Form>
            </div>

            <div
              style={{
                border: `8px solid ${green}`,
                borderRadius: 6,
                padding: 16,
                minHeight: 420
              }}
            >
              <Row xs={1} sm={2} md={3}>
              {filteredItems.map((item, idx) => (
                  <StoreCard key={item.id ?? item.description ?? idx} item={item} cardStyle={{width:"32%"}}/>
                ))}
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}