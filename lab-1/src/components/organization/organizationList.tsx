import { useState } from "react";
import orgData from "../../assets/organization.json";
import "./organization.css";

function OrganizationList() {
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const filteredOrg = orgData.filter(
    (role) =>
      role.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      role.person.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="organization">
      <h2>Organization</h2>
      <input
        placeholder="Enter title or person"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {filteredOrg.map((role) => (
        <div key={role.id} className="role" style={{ marginBottom: "1rem", cursor: "pointer" }}>
          <h4 onClick={() => setExpandedId(expandedId === role.id ? null : role.id)}>
            {role.title} - {role.person}
          </h4>
          {expandedId === role.id && <p>{role.description}</p>}
          <hr />
        </div>
      ))}

      {filteredOrg.length === 0 && <p>No Matches found!!.</p>}
    </section>
  );
}

export default OrganizationList;
