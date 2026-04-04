export type AdminUserPublic = {
  id: string;
  username: string;
  displayName?: string;
};

export type AdminLoginRequest = {
  username: string;
  password: string;
};

export type AdminLoginResponse = {
  ok: boolean;
  message?: string;
  user?: AdminUserPublic;
};

export type AdminSessionResponse = {
  ok: boolean;
  authenticated: boolean;
  user?: AdminUserPublic;
};

export type AdminDashboardResponse = {
  ok: boolean;
  message?: string;
  user?: AdminUserPublic;
};

export type AdminAuthenticatedSession = {
  user: AdminUserPublic;
  expiresAt: string;
};
