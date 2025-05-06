export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type Database = {
  public: {
    Tables: {
      app_user: {
        Row: {
          email: string | null;
          first_name: string | null;
          id: number;
          image_url: string | null;
          last_name: string | null;
          password: string | null;
        };
        Insert: {
          email?: string | null;
          first_name?: string | null;
          id?: number;
          image_url?: string | null;
          last_name?: string | null;
          password?: string | null;
        };
        Update: {
          email?: string | null;
          first_name?: string | null;
          id?: number;
          image_url?: string | null;
          last_name?: string | null;
          password?: string | null;
        };
        Relationships: [];
      };
      location: {
        Row: {
          id: number;
          latitude: number;
          longitude: number;
          name: string;
        };
        Insert: {
          id?: number;
          latitude: number;
          longitude: number;
          name: string;
        };
        Update: {
          id?: number;
          latitude?: number;
          longitude?: number;
          name?: string;
        };
        Relationships: [];
      };
      organization: {
        Row: {
          id: number;
          image_url: string | null;
          name: string;
          organization_type_id: number | null;
        };
        Insert: {
          id?: number;
          image_url?: string | null;
          name: string;
          organization_type_id?: number | null;
        };
        Update: {
          id?: number;
          image_url?: string | null;
          name?: string;
          organization_type_id?: number | null;
        };
        Relationships: [
          {
            foreignKeyName: "organization_organization_type_id_fkey";
            columns: ["organization_type_id"];
            isOneToOne: false;
            referencedRelation: "organization_type";
            referencedColumns: ["id"];
          }
        ];
      };
      organization_location: {
        Row: {
          location_id: number;
          organization_id: number;
        };
        Insert: {
          location_id: number;
          organization_id: number;
        };
        Update: {
          location_id?: number;
          organization_id?: number;
        };
        Relationships: [
          {
            foreignKeyName: "organization_location_location_id_fkey";
            columns: ["location_id"];
            isOneToOne: false;
            referencedRelation: "location";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "organization_location_organization_id_fkey";
            columns: ["organization_id"];
            isOneToOne: false;
            referencedRelation: "organization";
            referencedColumns: ["id"];
          }
        ];
      };
      organization_type: {
        Row: {
          description: string | null;
          id: number;
          name: string;
        };
        Insert: {
          description?: string | null;
          id?: number;
          name: string;
        };
        Update: {
          description?: string | null;
          id?: number;
          name?: string;
        };
        Relationships: [];
      };
      qr_code: {
        Row: {
          created_at: string | null;
          id: number;
          qr_code: string | null;
          url: string | null;
          worker_id: number | null;
        };
        Insert: {
          created_at?: string | null;
          id?: number;
          qr_code?: string | null;
          url?: string | null;
          worker_id?: number | null;
        };
        Update: {
          created_at?: string | null;
          id?: number;
          qr_code?: string | null;
          url?: string | null;
          worker_id?: number | null;
        };
        Relationships: [
          {
            foreignKeyName: "qr_code_worker_id_fkey";
            columns: ["worker_id"];
            isOneToOne: false;
            referencedRelation: "worker";
            referencedColumns: ["id"];
          }
        ];
      };
      rated_item: {
        Row: {
          id: number;
          rating_id: number | null;
          rating_item_id: number | null;
          score: number | null;
        };
        Insert: {
          id?: number;
          rating_id?: number | null;
          rating_item_id?: number | null;
          score?: number | null;
        };
        Update: {
          id?: number;
          rating_id?: number | null;
          rating_item_id?: number | null;
          score?: number | null;
        };
        Relationships: [
          {
            foreignKeyName: "rated_item_rating_id_fkey";
            columns: ["rating_id"];
            isOneToOne: false;
            referencedRelation: "rating";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "rated_item_rating_item_id_fkey";
            columns: ["rating_item_id"];
            isOneToOne: false;
            referencedRelation: "rating_item";
            referencedColumns: ["id"];
          }
        ];
      };
      rating: {
        Row: {
          comment: string | null;
          created_at: string | null;
          id: number;
          organization_id: number | null;
          qr_code_id: number | null;
          score: number | null;
          worker_id: number | null;
        };
        Insert: {
          comment?: string | null;
          created_at?: string | null;
          id?: number;
          organization_id?: number | null;
          qr_code_id?: number | null;
          score?: number | null;
          worker_id?: number | null;
        };
        Update: {
          comment?: string | null;
          created_at?: string | null;
          id?: number;
          organization_id?: number | null;
          qr_code_id?: number | null;
          score?: number | null;
          worker_id?: number | null;
        };
        Relationships: [
          {
            foreignKeyName: "rating_organization_id_fkey";
            columns: ["organization_id"];
            isOneToOne: false;
            referencedRelation: "organization";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "rating_qr_code_id_fkey";
            columns: ["qr_code_id"];
            isOneToOne: false;
            referencedRelation: "qr_code";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "rating_worker_id_fkey";
            columns: ["worker_id"];
            isOneToOne: false;
            referencedRelation: "worker";
            referencedColumns: ["id"];
          }
        ];
      };
      rating_item: {
        Row: {
          description: string | null;
          id: number;
          image_url: string | null;
          name: string;
          organization_id: number;
        };
        Insert: {
          description?: string | null;
          id?: number;
          image_url?: string | null;
          name: string;
          organization_id?: number;
        };
        Update: {
          description?: string | null;
          id?: number;
          image_url?: string | null;
          name?: string;
          organization_id?: number;
        };
        Relationships: [
          {
            foreignKeyName: "rating_item_organization_id_fkey";
            columns: ["organization_id"];
            isOneToOne: false;
            referencedRelation: "organization";
            referencedColumns: ["id"];
          }
        ];
      };
      tenant: {
        Row: {
          id: number;
          name: string | null;
          organization_id: number | null;
        };
        Insert: {
          id?: number;
          name?: string | null;
          organization_id?: number | null;
        };
        Update: {
          id?: number;
          name?: string | null;
          organization_id?: number | null;
        };
        Relationships: [
          {
            foreignKeyName: "fk_tenant_organization";
            columns: ["organization_id"];
            isOneToOne: false;
            referencedRelation: "organization";
            referencedColumns: ["id"];
          }
        ];
      };
      tenant_app_user: {
        Row: {
          app_user_id: number;
          tenant_id: number;
        };
        Insert: {
          app_user_id: number;
          tenant_id: number;
        };
        Update: {
          app_user_id?: number;
          tenant_id?: number;
        };
        Relationships: [
          {
            foreignKeyName: "tenant_app_user_app_user_id_fkey";
            columns: ["app_user_id"];
            isOneToOne: false;
            referencedRelation: "app_user";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "tenant_app_user_tenant_id_fkey";
            columns: ["tenant_id"];
            isOneToOne: false;
            referencedRelation: "tenant";
            referencedColumns: ["id"];
          }
        ];
      };
      worker: {
        Row: {
          age: number | null;
          avg_rating: number | null;
          date_of_birth: string | null;
          email: string | null;
          first_name: string;
          id: number;
          last_name: string;
          organization_id: number | null;
          phone_number: string | null;
          picture_url: string | null;
        };
        Insert: {
          age?: number | null;
          avg_rating?: number | null;
          date_of_birth?: string | null;
          email?: string | null;
          first_name: string;
          id?: number;
          last_name: string;
          organization_id?: number | null;
          phone_number?: string | null;
          picture_url?: string | null;
        };
        Update: {
          age?: number | null;
          avg_rating?: number | null;
          date_of_birth?: string | null;
          email?: string | null;
          first_name?: string;
          id?: number;
          last_name?: string;
          organization_id?: number | null;
          phone_number?: string | null;
          picture_url?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "worker_organization_id_fkey";
            columns: ["organization_id"];
            isOneToOne: false;
            referencedRelation: "organization";
            referencedColumns: ["id"];
          }
        ];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
};

type DefaultSchema = Database[Extract<keyof Database, "public">];

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database;
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R;
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
      DefaultSchema["Views"])
  ? (DefaultSchema["Tables"] &
      DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
      Row: infer R;
    }
    ? R
    : never
  : never;

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database;
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I;
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
  ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
      Insert: infer I;
    }
    ? I
    : never
  : never;

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database;
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U;
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
  ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
      Update: infer U;
    }
    ? U
    : never
  : never;

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database;
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
  ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
  : never;

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database;
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
  ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
  : never;

export const Constants = {
  public: {
    Enums: {},
  },
} as const;
