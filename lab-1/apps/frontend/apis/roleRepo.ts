import orgData from "../assets/organization.json";

export interface Role {
  id: number;
  title: string;
  person: string;
  description: string;
}


export function getRoles(): Role[] {
  return orgData;
}

export function getRoleById(roleId: number): Role {
  const foundRole = orgData.find((r) => r.id === roleId);
  if (!foundRole) {
    throw new Error(`Failed to fetch role with ID ${roleId}`);
  }
  return foundRole;
}

export async function addRole(role: Role): Promise<Role> {
  orgData.push(role);
  return role;
}

export async function updateRole(role: Role): Promise<Role> {
  const index = orgData.findIndex((r) => r.id === role.id);
  if (index === -1) {
    throw new Error(`Failed to update role with ID ${role.id}`);
  }
  orgData[index] = role;
  return orgData[index];
}

export async function deleteRole(roleId: number): Promise<boolean> {
  const index = orgData.findIndex((r) => r.id === roleId);
  if (index === -1) {
    throw new Error(`Failed to delete role with ID ${roleId}`);
  }
  orgData.splice(index, 1);
  return true;
}
