export interface APIError {
  message: string;
}

type API_METHODS = "GET" | "POST" | "PUT" | "DELETE";

export async function request<T>(
  path: string,
  method: API_METHODS = "GET",
  body?: {}
): Promise<T | undefined> {
  try {
    const request = await fetch(`/api/${path}`, {
      method,
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        Accept: "application/json",
      },
      referrerPolicy: "no-referrer",
      body: JSON.stringify(body),
    });

    const data: T | undefined = await request.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch data", error);
    throw error;
  }
}
