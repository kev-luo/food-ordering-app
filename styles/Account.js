import styled from "styled-components";

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  td, th {
    padding: 8px;
    text-align: left;
  }
  tr:nth-child(even) {
    background-color: #dddddd;
  }
`