import { useState } from "react";
import { useEntryForm } from "../../../hooks/useEntryForm";
import * as roleRepo from "../../../apis/roleRepo";
import "./Organization.css";

export default function OrganizationList() {
  const [roles, setRoles] = useState(roleRepo.getRoles());
  const [search, setSearch] = useState("");
  const [expandedRoleId, setExpandedRoleId] = useState<number | null>(null);
  const { form, Change, Submit, errors, success } = useEntryForm("role");

  const filteredRoles = roles.filter(
    (role) =>
      role.title.toLowerCase().includes(search.toLowerCase()) ||
      role.person.toLowerCase().includes(search.toLowerCase())
  );
  const handleExpand = (id: number) => {
    setExpandedRoleId(expandedRoleId === id ? null : id);
  };

  const handleAddRole = (e: React.FormEvent) => {
    e.preventDefault();
    Submit(e);
    setRoles([...roleRepo.getRoles()]);
  };

  return (
    <div className="organization">
      <h2>Organization Directory</h2>

      <input
        type="text"
        placeholder="Search by title or person..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <form onSubmit={handleAddRole}>
        <input
          name="title"
          placeholder="Role Nmae"
          value={form.title}
          onChange={Change}
        />
        <input
          name="person"
          placeholder="Person Name"
          value={form.person}
          onChange={Change}
        />
        <input
          name="desc"
          placeholder="Description"
          value={form.desc}
          onChange={Change}
        />
        <button type="submit">Add New Role</button>
      </form>

      {errors && <p className="error">{errors}</p>}
      {success && <p className="success">{success}</p>}

      {filteredRoles.length > 0 ? (
        filteredRoles.map((role) => (
          <div
            key={role.id}
            className="role-card"
            onClick={() => handleExpand(role.id)}
          >
            <div className="role-header">
              <h4>{role.title}</h4>
              <p className="person-name">{role.person}</p>
            </div>

            {expandedRoleId === role.id && (
              <p className="description">{role.description}</p>
            )}
          </div>
        ))
      ) : (
        <p>Role Not Found!!.</p>
      )}
    </div>
  );
}
