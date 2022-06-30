import { Table, TableBody, TableCell, TableHead, TableRow, useMediaQuery } from "@mui/material";
import React, { useState } from "react";
import { tableContent, tableTabs } from "../data/content";
interface ResponsiveTableProps {}

const ResponsiveTable: React.FC<ResponsiveTableProps> = ({}) => {
  const [activeTab, setActiveTab] = useState(0);
  const belowSm = useMediaQuery((theme: any) => theme.breakpoints.down("sm"));

  return (
    <Table>
      <TableHead>
        <TableRow>
          {tableTabs.map((tab, tabIndex) => {
            const selected = activeTab === tabIndex && belowSm;
            return (
              <TableCell
                className="noSelect"
                key={tabIndex}
                sx={{
                  backgroundColor: (theme: any) =>
                    selected ? theme.palette.primary.main : theme.palette.secondary.main,
                  color: (theme: any) => (selected ? "white" : theme.palette.primary.main),
                  fontWeight: 700,
                  cursor: belowSm ? "pointer" : "default",
                  transition: "all 0.5s linear",
                }}
                onClick={belowSm ? () => setActiveTab(tabIndex) : undefined}
              >
                {tab}
              </TableCell>
            );
          })}
        </TableRow>
      </TableHead>
      <TableBody>
        {tableContent.map((row, rowIndex) => {
          return (
            <TableRow key={rowIndex}>
              {belowSm ? (
                <TableCell sx={{ color: (theme) => theme.palette.grey[700] }} colSpan={3}>
                  {row[activeTab]}
                </TableCell>
              ) : (
                row.map((cell, cellIndex) => {
                  return (
                    <TableCell sx={{ color: (theme) => theme.palette.grey[700] }} key={cellIndex}>
                      {cell}
                    </TableCell>
                  );
                })
              )}
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};
export default ResponsiveTable;
